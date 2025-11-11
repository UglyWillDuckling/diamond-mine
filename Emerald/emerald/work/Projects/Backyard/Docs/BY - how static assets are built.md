#howto/backyard 

build trigger on [[helm-charts repo]]
https://github.com/MeilleursAgents/asg-helm-charts/blob/5d60ae3e3da6dac2aac9c6395bdd120b98e83486/charts/malegacy/values.yaml#L89

___

The static content is built each time the legacy app is built. Kubernetees will then copy this content over to a [[gs bucket]].
The name for the files directory will be based based on the `APP_STATIC_VERSION` value.
### charts def

```yaml
jobs:
  annotations:
    argocd.argoproj.io/hook: PreSync
    argocd.argoproj.io/hook-delete-policy: BeforeHookCreation
  jobs:
    - name: copy-to-bucket
      useVolumes: true
      image:
        name: docker.io/google/cloud-sdk
        # Temporarily fix the previous version because of this bug
        # https://cloud.google.com/storage/docs/release-notes#January_19_2023
        # https://github.com/GoogleCloudPlatform/gsutil/issues/1663
        tag: 413.0.0-slim

        command: ["gsutil", "-m", "-h", "Cache-Control:public, max-age=86400", "cp", "-a", "public-read", "-r", "-z", '"css,js"', "/assets/malegacy/*", "gs://$(STATIC_BUCKET_NAME)/$(APP_STATIC_VERSION)"]
      activeDeadlineSeconds: 600
      volumeMounts:
        - name: assets
          path: "/assets"
      initContainers:
        name: copy-from-image
        image:
          image:
          command: ['sh', '-c', "cp -r /home/meilleursagents/static/ /assets/malegacy && rm -rf /assets/malegacy/bootstrap"]
        volumeMounts:
          - name: assets
            path: "/assets"
  volumes:
    - name: "assets"
      type: "emptyDir"
```

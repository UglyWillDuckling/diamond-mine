
See [[MA static content location - bucket on GCP]]
Use [[gsutil]]

1. create the new bucket on GCP
2. download the latest version locally
3. upload that version to the new bucket
4. replace whichever files you want with the ones from your local machine
5. update file names to match the `static version`

**note**:
you will also need to update the static content version see [[what variable controls static version on remote env's on BY]].

current version is 3.28.3, new: oov-test

### example upload

```sh
gsutil cp backyard-oov-test.js "gs://malegacy-static-dev/oov-test/js/"
```

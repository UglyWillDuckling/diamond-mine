
- [x] remember me 1 week (@2025-02-26 13:23)
- [x] monthly (@2025-03-29)
___

Just use [[mkcert]] to generate the certificates and then use them.

```rb
mkcert wordpress-docker.test
```

This will generated 2 certificate files
- wordpress-docker.test-key.pem
- wordpress-docker.test.pem


> [!info] please note,
> you will need to first **trust** the `mkcert` local authority

You can use these files with with a [[web server]] now

**related**:: [[SSL]], [[Atlas/Knowledge/Knowledge/concepts/SSL certificate]], [[write down how to setup local ssl certificate]]
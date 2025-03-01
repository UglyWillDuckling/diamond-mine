
- [ ] remember me 1 week (@2025-02-26)

Just use [[mkcert]] to generate the certificates and then use them.

```bash
mkcert wordpress-docker.test
```

This will generated 2 certificate files
- wordpress-docker.test-key.pem
- wordpress-docker.test.pem

You can use these files with with a [[web server]] now

**related**:: [[SSL]], [[Atlas/Knowledge/Knowledge/concepts/SSL certificate]], [[write down how to setup local ssl certificate]]
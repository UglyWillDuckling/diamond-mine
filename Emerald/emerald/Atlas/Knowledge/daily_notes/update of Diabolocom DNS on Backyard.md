---
status:
  - ready for production
  - implemented
---
#ticket/chore

Update DNS address for [[Diabolocom]]

## update

```diff
--- a/MALegacy/share/class.diabolocom_call.inc
+++ b/MALegacy/share/class.diabolocom_call.inc
-    public const NAS_PATH_ENREG = 'http://syno-enreg/EnregistrementsDiabolocom';
+    private const NAS_PATH_ENREG = 'http://syno-enreg.users.poliris.net/EnregistrementsDiabolocom';
```
---
created: 2025-03-19
published: 
source: https://www.thegeekstuff.com/2010/10/linux-error-codes/
tags:
  - article/list/errors/unix
---
Programmers should handle all kinds of errors to protect the program from failure.

In [C programming language](https://www.thegeekstuff.com/2009/09/how-to-write-compile-and-execute-c-program-on-unix-os-with-hello-world-example/), there is no direct support for error handling. You have to detect the failure and handle the error. In C programming language, return values represents success or failure. Inside a C program, when a function fails, you should handle the errors accordingly, or at least record the errors in a log file.

When you are running some program on Linux environment, you might notice that it gives some error number. For example, “Error no is : 17”, which doesn’t really say much. You really need to know what error number 17 means.

This article shows all available error numbers along with it descriptions. This article might be a handy reference for you, when you encounter an error number and you would like to know what it means.

- In C programming language, there is an external variable called “errno”.
- From this errno variable you can use some error handling functions to find out the error description and handle it appropriately.
- You have to include errno.h header file to use external variable errno.
- perror function prints error description in standard error.
- The strerror function returns a string describing the error code passed in the argument errnum.

The following C code snippet tries to open a file through open system call. There are two flags in the open call. O\_CREAT flag is to create a file, if the file does not exist. O\_EXCL flag is used with O\_CREAT, if the file is already exist open call will fail with the proper error number.

```
$ cat fileopen.c
#include <stdio.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>
main()
{
// Declaration of a file descriptor
int fd;

// Opening a file
fd = open("/root/sasikala/testing",O_CREAT|O_EXCL);
// If Open is failed
if ( fd < 0 ) {
        printf("Opening file : Failed\n");
        printf ("Error no is : %d\n", errno);
        printf("Error description is : %s\n",strerror(errno));
}
// If Open is success
else
        printf("Opening file : Success\n");

}

$ cc -o fileopen fileopen.c
$ ./fileopen

Opening file : Success

$ ./fileopen
Opening file : Failed
Error no is : 17
Error description is : File exists
```

At first execution, open got executed successfully, and it created the file since the file was not available. In next execution, it throws an error number 17, which is “File already exist”.

The following table shows list of error numbers and its descriptions in Linux operation system

<table><tbody><tr><th colspan="3">ERROR CODE TABLE</th></tr><tr><td>Error number</td><td>Error Code</td><td>Error Description</td></tr><tr><td>1</td><td>EPERM</td><td>Operation not permitted</td></tr><tr><td>2</td><td>ENOENT</td><td>No such file or directory</td></tr><tr><td>3</td><td>ESRCH</td><td>No such process</td></tr><tr><td>4</td><td>EINTR</td><td>Interrupted system call</td></tr><tr><td>5</td><td>EIO</td><td>I/O error</td></tr><tr><td>6</td><td>ENXIO</td><td>No such device or address</td></tr><tr><td>7</td><td>E2BIG</td><td>Argument list too long</td></tr><tr><td>8</td><td>ENOEXEC</td><td>Exec format error</td></tr><tr><td>9</td><td>EBADF</td><td>Bad file number</td></tr><tr><td>10</td><td>ECHILD</td><td>No child processes</td></tr><tr><td>11</td><td>EAGAIN</td><td>Try again</td></tr><tr><td>12</td><td>ENOMEM</td><td>Out of memory</td></tr><tr><td>13</td><td>EACCES</td><td>Permission denied</td></tr><tr><td>14</td><td>EFAULT</td><td>Bad address</td></tr><tr><td>15</td><td>ENOTBLK</td><td>Block device required</td></tr><tr><td>16</td><td>EBUSY</td><td>Device or resource busy</td></tr><tr><td>17</td><td>EEXIST</td><td>File exists</td></tr><tr><td>18</td><td>EXDEV</td><td>Cross-device link</td></tr><tr><td>19</td><td>ENODEV</td><td>No such device</td></tr><tr><td>20</td><td>ENOTDIR</td><td>Not a directory</td></tr><tr><td>21</td><td>EISDIR</td><td>Is a directory</td></tr><tr><td>22</td><td>EINVAL</td><td>Invalid argument</td></tr><tr><td>23</td><td>ENFILE</td><td>File table overflow</td></tr><tr><td>24</td><td>EMFILE</td><td>Too many open files</td></tr><tr><td>25</td><td>ENOTTY</td><td>Not a typewriter</td></tr><tr><td>26</td><td>ETXTBSY</td><td>Text file busy</td></tr><tr><td>27</td><td>EFBIG</td><td>File too large</td></tr><tr><td>28</td><td>ENOSPC</td><td>No space left on device</td></tr><tr><td>29</td><td>ESPIPE</td><td>Illegal seek</td></tr><tr><td>30</td><td>EROFS</td><td>Read-only file system</td></tr><tr><td>31</td><td>EMLINK</td><td>Too many links</td></tr><tr><td>32</td><td>EPIPE</td><td>Broken pipe</td></tr><tr><td>33</td><td>EDOM</td><td>Math argument out of domain of func</td></tr><tr><td>34</td><td>ERANGE</td><td>Math result not representable</td></tr><tr><td>35</td><td>EDEADLK</td><td>Resource deadlock would occur</td></tr><tr><td>36</td><td>ENAMETOOLONG</td><td>File name too long</td></tr><tr><td>37</td><td>ENOLCK</td><td>No record locks available</td></tr><tr><td>38</td><td>ENOSYS</td><td>Function not implemented</td></tr><tr><td>39</td><td>ENOTEMPTY</td><td>Directory not empty</td></tr><tr><td>40</td><td>ELOOP</td><td>Too many symbolic links encountered</td></tr><tr><td>42</td><td>ENOMSG</td><td>No message of desired type</td></tr><tr><td>43</td><td>EIDRM</td><td>Identifier removed</td></tr><tr><td>44</td><td>ECHRNG</td><td>Channel number out of range</td></tr><tr><td>45</td><td>EL2NSYNC</td><td>Level 2 not synchronized</td></tr><tr><td>46</td><td>EL3HLT</td><td>Level 3 halted</td></tr><tr><td>47</td><td>EL3RST</td><td>Level 3 reset</td></tr><tr><td>48</td><td>ELNRNG</td><td>Link number out of range</td></tr><tr><td>49</td><td>EUNATCH</td><td>Protocol driver not attached</td></tr><tr><td>50</td><td>ENOCSI</td><td>No CSI structure available</td></tr><tr><td>51</td><td>EL2HLT</td><td>Level 2 halted</td></tr><tr><td>52</td><td>EBADE</td><td>Invalid exchange</td></tr><tr><td>53</td><td>EBADR</td><td>Invalid request descriptor</td></tr><tr><td>54</td><td>EXFULL</td><td>Exchange full</td></tr><tr><td>55</td><td>ENOANO</td><td>No anode</td></tr><tr><td>56</td><td>EBADRQC</td><td>Invalid request code</td></tr><tr><td>57</td><td>EBADSLT</td><td>Invalid slot</td></tr><tr><td>59</td><td>EBFONT</td><td>Bad font file format</td></tr><tr><td>60</td><td>ENOSTR</td><td>Device not a stream</td></tr><tr><td>61</td><td>ENODATA</td><td>No data available</td></tr><tr><td>62</td><td>ETIME</td><td>Timer expired</td></tr><tr><td>63</td><td>ENOSR</td><td>Out of streams resources</td></tr><tr><td>64</td><td>ENONET</td><td>Machine is not on the network</td></tr><tr><td>65</td><td>ENOPKG</td><td>Package not installed</td></tr><tr><td>66</td><td>EREMOTE</td><td>Object is remote</td></tr><tr><td>67</td><td>ENOLINK</td><td>Link has been severed</td></tr><tr><td>68</td><td>EADV</td><td>Advertise error</td></tr><tr><td>69</td><td>ESRMNT</td><td>Srmount error</td></tr><tr><td>70</td><td>ECOMM</td><td>Communication error on send</td></tr><tr><td>71</td><td>EPROTO</td><td>Protocol error</td></tr><tr><td>72</td><td>EMULTIHOP</td><td>Multihop attempted</td></tr><tr><td>73</td><td>EDOTDOT</td><td>RFS specific error</td></tr><tr><td>74</td><td>EBADMSG</td><td>Not a data message</td></tr><tr><td>75</td><td>EOVERFLOW</td><td>Value too large for defined data type</td></tr><tr><td>76</td><td>ENOTUNIQ</td><td>Name not unique on network</td></tr><tr><td>77</td><td>EBADFD</td><td>File descriptor in bad state</td></tr><tr><td>78</td><td>EREMCHG</td><td>Remote address changed</td></tr><tr><td>79</td><td>ELIBACC</td><td>Can not access a needed shared library</td></tr><tr><td>80</td><td>ELIBBAD</td><td>Accessing a corrupted shared library</td></tr><tr><td>81</td><td>ELIBSCN</td><td>.lib section in a.out corrupted</td></tr><tr><td>82</td><td>ELIBMAX</td><td>Attempting to link in too many shared libraries</td></tr><tr><td>83</td><td>ELIBEXEC</td><td>Cannot exec a shared library directly</td></tr><tr><td>84</td><td>EILSEQ</td><td>Illegal byte sequence</td></tr><tr><td>85</td><td>ERESTART</td><td>Interrupted system call should be restarted</td></tr><tr><td>86</td><td>ESTRPIPE</td><td>Streams pipe error</td></tr><tr><td>87</td><td>EUSERS</td><td>Too many users</td></tr><tr><td>88</td><td>ENOTSOCK</td><td>Socket operation on non-socket</td></tr><tr><td>89</td><td>EDESTADDRREQ</td><td>Destination address required</td></tr><tr><td>90</td><td>EMSGSIZE</td><td>Message too long</td></tr><tr><td>91</td><td>EPROTOTYPE</td><td>Protocol wrong type for socket</td></tr><tr><td>92</td><td>ENOPROTOOPT</td><td>Protocol not available</td></tr><tr><td>93</td><td>EPROTONOSUPPORT</td><td>Protocol not supported</td></tr><tr><td>94</td><td>ESOCKTNOSUPPORT</td><td>Socket type not supported</td></tr><tr><td>95</td><td>EOPNOTSUPP</td><td>Operation not supported on transport endpoint</td></tr><tr><td>96</td><td>EPFNOSUPPORT</td><td>Protocol family not supported</td></tr><tr><td>97</td><td>EAFNOSUPPORT</td><td>Address family not supported by protocol</td></tr><tr><td>98</td><td>EADDRINUSE</td><td>Address already in use</td></tr><tr><td>99</td><td>EADDRNOTAVAIL</td><td>Cannot assign requested address</td></tr><tr><td>100</td><td>ENETDOWN</td><td>Network is down</td></tr><tr><td>101</td><td>ENETUNREACH</td><td>Network is unreachable</td></tr><tr><td>102</td><td>ENETRESET</td><td>Network dropped connection because of reset</td></tr><tr><td>103</td><td>ECONNABORTED</td><td>Software caused connection abort</td></tr><tr><td>104</td><td>ECONNRESET</td><td>Connection reset by peer</td></tr><tr><td>105</td><td>ENOBUFS</td><td>No buffer space available</td></tr><tr><td>106</td><td>EISCONN</td><td>Transport endpoint is already connected</td></tr><tr><td>107</td><td>ENOTCONN</td><td>Transport endpoint is not connected</td></tr><tr><td>108</td><td>ESHUTDOWN</td><td>Cannot send after transport endpoint shutdown</td></tr><tr><td>109</td><td>ETOOMANYREFS</td><td>Too many references: cannot splice</td></tr><tr><td>110</td><td>ETIMEDOUT</td><td>Connection timed out</td></tr><tr><td>111</td><td>ECONNREFUSED</td><td>Connection refused</td></tr><tr><td>112</td><td>EHOSTDOWN</td><td>Host is down</td></tr><tr><td>113</td><td>EHOSTUNREACH</td><td>No route to host</td></tr><tr><td>114</td><td>EALREADY</td><td>Operation already in progress</td></tr><tr><td>115</td><td>EINPROGRESS</td><td>Operation now in progress</td></tr><tr><td>116</td><td>ESTALE</td><td>Stale NFS file handle</td></tr><tr><td>117</td><td>EUCLEAN</td><td>Structure needs cleaning</td></tr><tr><td>118</td><td>ENOTNAM</td><td>Not a XENIX named type file</td></tr><tr><td>119</td><td>ENAVAIL</td><td>No XENIX semaphores available</td></tr><tr><td>120</td><td>EISNAM</td><td>Is a named type file</td></tr><tr><td>121</td><td>EREMOTEIO</td><td>Remote I/O error</td></tr><tr><td>122</td><td>EDQUOT</td><td>Quota exceeded</td></tr><tr><td>123</td><td>ENOMEDIUM</td><td>No medium found</td></tr><tr><td>124</td><td>EMEDIUMTYPE</td><td>Wrong medium type</td></tr><tr><td>125</td><td>ECANCELED</td><td>Operation Canceled</td></tr><tr><td>126</td><td>ENOKEY</td><td>Required key not available</td></tr><tr><td>127</td><td>EKEYEXPIRED</td><td>Key has expired</td></tr><tr><td>128</td><td>EKEYREVOKED</td><td>Key has been revoked</td></tr><tr><td>129</td><td>EKEYREJECTED</td><td>Key was rejected by service</td></tr><tr><td>130</td><td>EOWNERDEAD</td><td>Owner died</td></tr><tr><td>131</td><td>ENOTRECOVERABLE</td><td>State not recoverable</td></tr></tbody></table>

When you see an error number thrown by a C program on a Linux environment, you might find the above table handy to identify what those error number means. Make sure to bookmark this article for future reference.
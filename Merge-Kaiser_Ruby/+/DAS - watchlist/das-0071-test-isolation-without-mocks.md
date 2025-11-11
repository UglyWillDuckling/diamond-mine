#das-video 

Don't mock things unless you have to


- introduces distance between the result and the test
- very difficult to test the important stuff
	- forces you to test `calls` instead of `outputs`
	- very difficult to write test that cover all scenarios as the assertions [^1] are focused on `calls` instead of results
- more **difficult** to write
- very **hard to understand** just by reading the test
- many times forces you to know the insides of third-party code to make things work



[^1]: [[assertion]]
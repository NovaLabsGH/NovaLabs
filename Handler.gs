if typeof(result)=="computer" then
	device=result
	passwd_file=device.File("/etc/passwd")
	if passwd_file.has_permission("r")==1 then print("You can read the password file")
	
	if (device.File("/home")) and (device.File("/home").has_permission("r")) then
		for user in device.File("/home").get_folders
			
	

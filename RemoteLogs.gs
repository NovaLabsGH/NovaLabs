localshell=get_shell
localcomputer=get_shell.host_computer
ip=user_input("IP:")
remoteshell=get_shell.connect_service(ip,22,"root","root")
if remoteshell then 
	get_shell.scp("/.data/system.log","/var",remoteshell)
	exit("done")
else
	print("fail")
end if

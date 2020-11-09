version=1.0
//This program was made by the NovaLabs Dev team. 
//This program is made for the purpose of being used for all greyhack players. 
//Our Discord can be found at https://discord.gg/37WH8vRyzR 


clear_screen
shell=get_shell
computer=shell.host_computer
map={}
map.folders=[]
binary=function(file)
	if file.is_binary and file.has_permission("x")==1 then
		return(1)
		
	else if not file.is_binary then
		return("?")
	else if file.is_binary and file.has_permission("x")==0 then
		return(0)
	end if
end function

check =function(folder)
	map.hfiles=[]
	map.hfolders=[]
	clear_screen
	folders=folder.get_folders
	files=folder.get_files
	if files then print("FILES:")
	for file in files
		list=file.name.values
		if list.indexOf(".") !=null and list.indexOf(".")==0 then
			map.hfiles.push(file)
			continue
		end if
		print(file.name+":"+file.owner+":"+file.has_permission("r")+":"+file.has_permission("w")+":"+binary(file))
		
	end for
	if folders then print("<color=red>FOLDERS:")
	for folder in folders
		list=folder.name.values
		if list.indexOf(".") !=null and list.indexOf(".")==0 then 
			map.hfolders.push(folder)
			continue
		end if
		print(folder.name+":"+folder.owner+":"+folder.has_permission("r")+":"+folder.has_permission("w")+":"+binary(folder))
		
	end for
	if map.hfiles.len >0 or map.hfolders.len>0 then 
		if map.hfiles.len>0 then 
			print(" HIDDEN FILES:")
			for file in map.hfiles
				print("<color=red>Hidden File:"+file.name+" Owner:"+file.owner+":"+file.has_permission("r")+file.has_permission("w")+file.has_permission("x"))
			end for
		end if
		if map.hfolders.len>0 then
			print (" HIDDEN FOLDERS:")
			for folder in map.hfolders
				print("<color=red>Hidden Folder:"+folder.name+" Owner:"+folder.owner+":"+folder.has_permission("r")+folder.has_permission("w")+"?")
			end for
		end if
	end if
end function



	menu=function(path)
		
		if path=="exit" then exit()
		if path=="" then 
			clear_screen
			menu()
		end if
		folder=computer.File(path)
		if not folder then 
			print("Not valid path")
			wait(3)
			clear_screen
			menu()
		end if
		check(folder)
	end function
	
	start=function()
		path=user_input("Folder:")
		menu(path)
	end function
	while true
		start()
		end while


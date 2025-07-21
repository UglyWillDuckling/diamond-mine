---
tags:
  - tool/python
part of:
  - "[[python]]"
---
In Python,  venv  (short for "virtual environment") is a way to create an       
  isolated environment for your Python projects. This allows you to:              

1. Isolate dependencies: Manage project-specific dependencies without affecting 
  the system Python or other projects.                                            
2. Ensure reproducibility: Guarantee that your project works as expected, even  
  when dependencies are updated or changed.                                       
3. Simplify deployment: Easily package and deploy your project, including all   
  its dependencies, to any environment.                                           
	
  Here's how to use  venv :                                                       
                                                                                  
  ### Creating a virtual environment                                                  
                                                                                  
  Open a terminal or command prompt and run:                                      
                                                                                  
    python -m venv myenv                                                          
	
  Replace  myenv  with the name you want to give your virtual environment.        
                                                                                  
  - [ ] ### Activating the virtual environment                                              
	
  To activate the virtual environment, run:                                       

    source myenv/bin/activate  # On Linux/Mac                                     

  You should see the name of the virtual environment in your terminal or command  
  prompt, indicating that you're now operating within that environment.           
### Installing packages                                                             

  Once activated, you can install packages using  pip  as usual:                  

    pip install requests                                                          

  Packages will be installed in the virtual environment, rather than system-wide. 
                                                                                
  Deactivating the virtual environment                                            
                                                                                
  To exit the virtual environment, run:                                           
                                                                                
	deactivate                                                                    
                                                                              
## Managing virtual environments                                                   
	
  You can create multiple virtual environments for different projects or use      
  cases. To list all virtual environments, run:                                   
                                                                                  
    python -m venv --list                                                         
                                                                                  
  To delete a virtual environment, simply delete the directory:                   
                                                                                  
    rm -rf myenv                                                                  
                                                                                  
  Best practices                                                                  
                                                                                  
  4. Create a new virtual environment for each project to ensure isolation and    
  reproducibility.                                                                
  5. Use  requirements.txt  files to specify dependencies for your project.       
  6. Activate the virtual environment before running your Python application or   
  installing packages.                                                            
  7. Deactivate the virtual environment when finished working on your project.    
                                                                                  

#doc/luqa

## /***************** User Management LAMBDA **********************************/  
GET /api/users - Get list of users (paginated)  
POST /api/users - Create user  
GET /api/users/{userId} - Get user details  
PUT /api/users/{userId} - Update user  
DELETE /api/users/{userId} - Delete user  
  
## /***************** Roles Management LAMBDA *********************************/  

GET /api/roles - Get list of roles (paginated)  
POST /api/roles - Create role  
GET /api/users/{userId} - Get user details  
PUT /api/users/{userId} - Update role  
DELETE /api/users/{userId} - Delete role  
  
## /*********************** Teams Management LAMBDA **************************/  

GET /api/teams - Get list of teams (paginated)  
POST /api/teams - Create a team  
GET /api/teams/{teamId} - Get team details  
PUT /api/teams/{teamId} - Update team details  
DELETE /api/teams/{teamId} - Delete team  
GET /api/teams/{teamId}/members - Get team members (paginated)  
POST /api/teams/{teamId}/members - Add team member  
DELETE /api/teams/{teamId}/members/{userId} - Remove team member from team  
GET /api/teams/{teamId}/geographic-zones - Get team geo zones  
POST /api/teams/{teamId}/geographic-zones - Add team geo zone  
DELETE /api/teams/{teamId}/geographic-zones/{geoZoneId} - Remove team geo zone  
  
## /**************** GeoZone Management LAMBDA *******************************/  
GET /api/geo-zones?search=string&teamId=1 - Get list of geo zones  
  
## /***************** Project Management LAMBDA *******************************/  
GET /api/projects - Get list of users (paginated)  
GET /api/projects/:id - Get project details  
PUT /api/projects/:id/property-details - Update project leads  
PUT /api/projects/:id/project-details - Update project details  
GET /api/projects/:id/similar-projects - Get similar projects  
  
## /***************** Contacts Management LAMBDA ******************************/  
GET /api/contacts - Get list of contacts (paginated)  
GET /api/contacts/:contactId - Get contact details

## CC26 Polyglottal Project - Typeahead Suggestion  
  
**Typeahead Suggestion**  
A simple React app for an auto suggestion feature built in Go. When typing a word in the input form, it auto-suggests all the English words that share the same prefix as you type.  
This repository only contains code for frontend.  
  
  
## Frontend and Backend  
This project's frontend and backend are built separately.  
Source files for backend are at: https://github.com/mikako-shirai/Typeahead-Suggestion  
  
  
## Deployment  
Frontend: deployed at https://typeahead-suggestion.an.r.appspot.com/  
Backend: deployed at https://typeahead-suggestion-be.an.r.appspot.com/  
(Since this is a server side, there will be nothing on the page)  
  
  
## Built with  
**Frontend**  
- [React](https://reactjs.org/)  
- [axios](https://axios-http.com/)  
- [GCP App Engine](https://cloud.google.com/appengine/)  
  
**Backend**  
- [GCP App Engine](https://cloud.google.com/appengine/)  
  
  
## Getting Started    
1. clone this repository  
```
$ git clone https://github.com/mikako-shirai/Typeahead-Suggestion-frontend.git
```  
2. move to the root `Typeahead-Suggestion-frontend` directory  
```
$ cd Typeahead-Suggestion-frontend
```  
3. install dependencies for frontend  
```
$ npm install
```  
4. run the app locally  
```
$ npm start
```  
7. open [http://localhost:3000](http://localhost:3000) to view the app in your browser
  
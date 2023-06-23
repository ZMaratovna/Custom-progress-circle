# Custom-progress-circle

To run the project:

`npm install` -> `npm run dev`


Here is the implementation of circular progress with time determination (pure CSS). 

- When user clicks on the info icon, the dialog with detailes of pipeline will be opened.
- To imitate loading process I used async generators. 
- To store the state Recoil was used.
- !!!! The features with `stop/resume/run` test *don't work so far* because of problems with obtaining the up-to-date state and possibility to stop generator. I'll think about another solution for mocking processing data pipeline. 

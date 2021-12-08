# NTCG-deno-todo

This project is part of the NodeJs - The Complete Guide course by Maximilian Schwarzmüller.

What is different from the course is how to use await async for POST and PUT where how it's shown doesn't work so I was able to make it work thanks to : https://stackoverflow.com/questions/63728312/deno-post-method-empty-request-body.

You will need Deno CLI installed in your computer in order to make this work and perhaps use the Deno extension from Denoland to not make your IDE go crazy. Also CTRL+SHIFT+P to Initialize Workspace Configuration and allow Linting as well as unstable APIs if you wish to use the extension to make it work properly.

- To run the Deno REST API, you will need to `cd deno` and from there you will be able to run the command
  `deno run --allow-net app.ts`

- For the Node REST API, simple disable the Deno extension and restart the IDE. At this point, just go to the node folder and do `npm install` then you should be able to `npm start` for the server to run.

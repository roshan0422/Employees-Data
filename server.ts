import express, { Request, Response, NextFunction } from 'express';

const app = express();

// Enable CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rest of your server code...

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

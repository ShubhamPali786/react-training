// entry file
// import statements
// import {  } from "module";
// ./ : current level
// ../ : one level up
import divide, { add as addition, mul } from "./modules";
// import divide from "./modules";
// import {add} from 'some-module';
addition(1, 2);
divide(3, 2);

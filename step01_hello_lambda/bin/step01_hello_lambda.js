#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const step01_hello_lambda_stack_1 = require("../lib/step01_hello_lambda-stack");
const app = new cdk.App();
new step01_hello_lambda_stack_1.Step01HelloLambdaStack(app, "Step01HelloLambdaStack");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcDAxX2hlbGxvX2xhbWJkYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0ZXAwMV9oZWxsb19sYW1iZGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxnRkFBMEU7QUFFMUUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxrREFBc0IsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcclxuaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGVwMDFIZWxsb0xhbWJkYVN0YWNrIH0gZnJvbSBcIi4uL2xpYi9zdGVwMDFfaGVsbG9fbGFtYmRhLXN0YWNrXCI7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG5uZXcgU3RlcDAxSGVsbG9MYW1iZGFTdGFjayhhcHAsIFwiU3RlcDAxSGVsbG9MYW1iZGFTdGFja1wiKTtcclxuIl19
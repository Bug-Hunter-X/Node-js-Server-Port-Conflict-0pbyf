# Node.js Server Port Conflict

This repository demonstrates a common error in Node.js where a server does not properly close, leading to port conflicts.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The issue arises from failing to explicitly close the HTTP server using `server.close()`.  Without this, the process may exit before the server is properly shut down, leaving the port in a TIME_WAIT state.  Subsequent attempts to start a server on the same port will fail.

## Solution

The solution involves adding a `server.close()` call with an optional callback to handle the server shutdown gracefully. This ensures that the server releases the port before the process exits, preventing future conflicts.
// Dependencies
import "dotenv/config";
import chalk from "chalk";

// Events

// Handlers

// Main -- Entry point program
( function main(): Number {
    // Check OS of current platform
    if ( process.platform === "win32" ) {
        console.log( chalk.bgBlue.white.bold( " ===== STARTING NODETIFACTS PROGRAM ===== " ) );
        console.log( chalk.blue( "[#] Move with: 'W', 'A', 'S', 'D'" ) );
        console.log( chalk.blue( "[#] Interact with 'E'" ) );
        console.log( chalk.blue( "[#] Fight with 'F'" ) );
        console.log( chalk.blue( "[#] Ctrl-C to end the program" ) );
        
        // Set raw mode for input stream
        process.stdin.setRawMode( true );
        process.stdin.resume();
        process.stdin.setEncoding( "utf8" );
        // Read user input
        process.stdin.on( "data", ( key ) => {
            if ( key.toString() === "\u0003" ) {
                process.stdout.write( chalk.bgRed.bold( "Closeing program..." ) );
                setTimeout( () => process.exit(), 3000);
            }
            process.stdout.write( chalk.red( key ) );
        } );
    }
    return 0;
} )();
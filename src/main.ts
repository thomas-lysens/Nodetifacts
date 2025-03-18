// Dependencies
import "dotenv/config";
import chalk from "chalk";

// Events

// Handlers

// Helpers
import ArtifactsMMO from "./helpers/ArtifactsMMO";

// Main -- Entry point program
( async function main(): Promise< number > {
    const nodetifact = new ArtifactsMMO( process.env.API_TOKEN );
    // Check OS of current platform
    if ( process.platform === "win32" ) {
        console.log( chalk.bgBlue.white.bold( " ===== STARTING NODETIFACTS PROGRAM ===== " ) );
        console.log( chalk.green( "[?] Select character to play" ) );
        Array.from( JSON.parse( await nodetifact.getCharacters() ).data ).forEach( ( el: any, key ) => {
            console.log( chalk.grey( el.name ) );
        } ); 
        console.log( chalk.blue( "[#] Move with: 'W', 'A', 'S', 'D'" ) );
        console.log( chalk.blue( "[#] Interact with 'E'" ) );
        console.log( chalk.blue( "[#] Fight with 'F'" ) );
        console.log( chalk.blue( "[#] Ctrl-C to end the program" ) );
        // Set raw mode for input stream
        process.stdin.setRawMode( true );
        process.stdin.resume();
        process.stdin.setEncoding( "utf8" );
        // Read user input
        process.stdin.on( "data", async ( key ) => {
            if ( key.toString() === "\u0003" ) {
                process.stdout.write( chalk.bgRed.bold( "\nClosing program..." ) );
                setTimeout( () => process.exit(), 3000);
            }

            switch ( key.toString() ) {
                case 'w':
                    process.stdout.write( chalk.green( "\nMoving up by 1" ) );
                    break;
                case 'a':
                    process.stdout.write( chalk.green( "\nMoving left by 1" ) );
                    break;
                case 's':
                    process.stdout.write( chalk.green( "\nMoving down by 1" ) );
                    break;
                case 'd':
                    process.stdout.write( chalk.green( "\nMoving right by 1" ) );
                    break;
                case 'e':
                    process.stdout.write( chalk.green( "\nInteracting with..." ) );
                    break;
                case 'f':
                    process.stdout.write( chalk.red( "\nAttack!" ) );
                    break;
            }
        } );
    }
    return 0;
} )();
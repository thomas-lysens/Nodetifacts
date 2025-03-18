// Dependencies
import * as https from "node:https";

// Types
import RequestOptions from "../types/RequestOptions";

class ArtifactsMMO {
    // Request options
    private options: RequestOptions = {
        method: "",
        hostname: "api.artifactsmmo.com",
        path: "",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.api_token
        }
    };

    constructor ( public api_token: string ) {
        this.api_token = api_token;
    }

    public async getCharacters(): Promise< string > {
        let body: string = "";
        this.options.method = "GET";
        this.options.path = "/my/characters";
        
        return new Promise< string >( ( resolve, reject ) => {
            https.request( this.options, ( res ) => {
                const chunks: Buffer[] = [];
    
                res.on( "data", ( chunk ) => {
                    chunks.push( chunk );
                } );

                res.on( "error", ( error ) => reject( error ) );
    
                res.on( "end", () => {
                    body = Buffer.concat( chunks ).toString( "utf-8" );
                    resolve( body );
                } );
            } ).on( "error", ( error ) => {
                 reject( error );
            } ).end();
        } );
    }
}

export default ArtifactsMMO;
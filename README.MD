# PokeIngest

PokeIngest is a script that ingests Pokemon Pokedex data from a JSON file into a Firestore database. It utilizes a service account JSON file from Google Cloud for authentication.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine
- Access to a Firestore database
- A service account JSON file from Google Cloud with appropriate permissions
- PNPM Package manager installed on your environment

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/andrei-hernandez/poke-ingest.git
    ```

2. Install the dependencies:

    ```bash
    pnpm install
    ```

3. Place your service account JSON file in the project root directory and name it `service-account.json`.

## Usage

1. To run the script, use the following command:

    ```bash
    pnpm ingest
    ```

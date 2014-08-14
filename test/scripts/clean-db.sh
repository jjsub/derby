#!/bin/bash

<<<<<<< HEAD
mongoimport --jsonArray --drop --db $1 --collection gamblers --file ../../db/gamblers.json
=======
mongoimport --jsonArray --drop --db $1 --collection people --file ../../db/people.json
>>>>>>> 4a3e479e8ae881cc03329a072bf6515a38284e00


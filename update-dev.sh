cd ./Rich-vocabulary-fron
git checkout dev
git pull
yarn install
yarn build
echo "[DEV]: Frontend updated."
cd ../
cd ./Rich-vocabulary-backend
git checkout dev
git pull
yarn install
yarn tsc
echo "[DEV]: Backend updated."
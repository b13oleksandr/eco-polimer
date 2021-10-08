# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/b13oleksandr/eco-polimer.git master:gh-pages

cd -

# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:Nastalgua/portfolio.git master:gh-pages

cd -
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@github.com:Biao9527/gugu-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://biao9527.github.io/gugu-ui-website/
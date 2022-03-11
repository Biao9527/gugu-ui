rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git remote add origin git@gitee.com:zhou-zibiao/gugu-ui-website.git &&
git push -f -u origin master &&
cd -
cp -r ../ptdev/build/* .
cp ../ptdev/md.json .
mkdir src
cp -r ../ptdev/src/views ./src
echo "Please enter the version:"
read version
date_time=`date +'%m%d'`
git add .
git ci -am "deploy@${date_time}-${version}"
git push origin master
echo "Successfully publish!"
# #!/bin/bash

# # Create seed file for entity
if [ -d db/seeds ]; then
  node ./template/module/createSeed.ts
  echo " - seed file is created . . . ✅"
  echo ""
else
  echo "❗ seed file already exists . ❗"
  echo ""
fi

exit 0


#!/bin/bash

# if [ $# -eq 0 ];
# then
#   echo "$0: Missing arguments"
#   exit 1
# elif [ $# -gt 2 ];
# then
#   echo "$0: Too many arguments: $@"
#   exit 1
# else
#   echo "We got some argument(s)"
#   echo "==========================="
#   echo "Number of arguments.: $#"
#   echo "List of arguments...: $@"
#   echo "Arg #1..............: $1"
#   echo "Arg #2..............: $2"
#   echo "==========================="
# fi

# echo "And then we do something with $1 $2"

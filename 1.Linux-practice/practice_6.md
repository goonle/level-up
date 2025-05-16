# Day 7 - Command Line Arguments & Case Statement
## Create the script file
```bash
nano greet-cli.sh
```
## Code
```bash
#!/bin/sh

# Check if at least 1 argument is given
if [ $# -lt 1 ]; then
  echo "Usage: ./greet-cli.sh [hello|bye|log]"
  exit 1
fi

# Capture first argument
command=$1

# Handle the command
case "$command" in
  hello)
    echo "👋 Hello, $USER!"
    ;;
  bye)
    echo "👋 Goodbye, $USER!"
    ;;
  log)
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] User $USER ran log command" >> logs/cli-log.log
    echo "Log saved to logs/cli-log.log"
    ;;
  *)
    echo "❌ Unknown command: $command"
    echo "Available commands: hello, bye, log"
    ;;
esac
```
If you know about `Switch statement`, It is easy to understand it. 
I could understand code even though i don't know some commands.
It looks like get arguments and if the arguments are one of the arguments (hello, bye, log), then show the actions.

To understand code properly, I needed to search the meaning of expressions.

### Argument Variables in Bash
| Variable | Meaning | Example Value |
| --- | --- | --- |
| $0 | The name of the script | ./greet-cli.sh |
| **$1** | First argument | hello |
| $2 | Second argument | bye |
| $3 | Third argument | log |
| "$@" | All arguments as separate | ("hello", "bye", "log" ) |
| "$*" | All arguments as one string | "hello bye log" |
| **$#** | Number of arguments | 3 |

## Run code
```bash
20241454-Junhyung:~/linux-practice# ./greet-cli.sh hello
Hello, root!
20241454-Junhyung:~/linux-practice# ./greet-cli.sh bye
Goodbye, root!
20241454-Junhyung:~/linux-practice# ./greet-cli.sh log
Log saved to Logs/cli-log.log
20241454-Junhyung:~/linux-practice# cat logs/
activity.log  cli-log.log
20241454-Junhyung:~/linux-practice# cat logs/cli-log.log
[2025-05-16 08:49:08] User root ran log command
20241454-Junhyung:~/linux-practice# ./greet-cli.sh hello bye
Hello, root!
```
The code doesn't deal with second and third arguments. So you can see that only hello is working for the last one
Then I wanted to run all of arguments at once

## Challenge : Run mulitple arguments
```sh
#!/bin/sh

if [ $# -lt 1 ] ; then
  echo "Usage: ./greet-cli.sh [hello|bye|log] "
  exit 1
fi

limit=3
cnt=0
for command in "$@"; do

  cnt=$(expr "$cnt" + 1)

  if [ "$cnt" -gt "$limit" ] ; then
    exit
  fi

  case "$command" in
    hello )
      echo "Hello, $USER!"
      ;;
    bye)
      echo "Goodbye, $USER!"
      ;;
    log)
      echo "[$(date '+%Y-%m-%d %H:%M:%S')] User $USER ran log command" >> logs/cli-log.log
      echo "Log saved to Logs/cli-log.log"
      ;;
    *)
      echo "Unknown Command: $command"
      echo "Available Commands: hello, bye, log"
      ;;
  esac
done
```
While this challenge, I noticed that i didn't. The thing is variables need to be wrapped by double qoute when you compare whether number or string.
And in .sh file, we need to use `cnt=$(expr "$cnt" + 1)`. And the space is really importnat between `+` and variable (Even number , 1).

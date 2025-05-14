# Day 5
## Bash Logging script with Date
```bash
nano log-response

# from day4 code
echo "What's your name?"
read name

############ [s] New Code 1 #############
mkdir -p logs
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
############ [e] New Code 1 #############


if [ "$name" = "Junhyung" ]; then
  echo "Welcome back, master "
else
  echo "Hello, $name!"
fi

############ [s] New Code 2 #############
echo "[$timestamp] $message" >> logs/activity.log
echo "$message"
echo "Response saved to logs/activity.log"
############ [e] New Code 2 #############

chmod +x log-response.sh
```
In this code, You can see `Date Format`. 
| Format | Meaning | Example Output |
| --- | --- | --- |
| `%Y` | Year (4 digits) | `2025` | 
| `%m` | Month (2 digits) | `05` | 
| `%d` | Day  | `15` | 
| `%H` | Hour (24 hour format) | `10` | 
| `%M` | Minute  | `40` | 
| `%S` | Second  | `00` |

## Result
```bash
# Run script
./log-response.sh

# echo
What's your name?
Minhyung
Hi, Minhyung.
Response saved to logs/activity.log
```

```bash
# log/activity.log file
[2025-05-14 22:32:15] Welcome back, master Junhyung!
[2025-05-14 22:32:22] Hi, Minhyung.
```
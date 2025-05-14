# Day 4
## Bash Scripting: Basic
### Install nano
```bash
cat /etc/os-release
PRETTY_NAME="Docker Desktop"
```
The os is depends on your setting or server. You need to know which OS you are using now.
Then download nano to type script easier.
```bash
# without editing program
20241454-Junhyung:~/linux-practice# echo "echo \"What's your name?\"" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "read name" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "if[\"$name\"=\"Junhyung\"]; then" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "  echo \"Welcome back, master $name\"" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "else" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "  echo \"Hello, $name!.\"" >> greet.sh
20241454-Junhyung:~/linux-practice# echo "fi" >> greet.sh

# With nano
#!/bin/sh
echo "What's your name?"
read name
if [ "$name" = "Junhyung" ]; then
  echo "Welcome back, master "
else
  echo "Hello, $name!"
fi
```
Without nano, I needed to code more for echo and >> greet.sh
But with nano, You can type easier without caring `Escape Seuqences`.

### Run code
```bash
./greet.sh
#What's your name?
Junhyung
#Welcome back, master

./greet.sh
#What's your name?
Minhyung
#Hello, Minhyung!
```
So We can contain user input with `read variable_name` and use it with `$variable_name`.
In bash scipt, when you use `if`, 
you need to use `if [ condition ] ; then action_1 else action_2 fi`.
And also need to be careful the space between `if`, `[`, and `]`. Not like JS, Mush have space.
Otherwise, it won't run.

### If (Optional)
#### Comparison (String VS Number)
```bash
if [ "$name" = "Junhyung"] ; then
```
When you compare strings, then use `=`(equal sign).

```bash
if [ "$num" -gt 5 ]; then 
```
When you compare numbers, then you need to use `Operators`.
| Operator | Meaning |
| --- | ---|
| `-eq` | Equal |
| `ne` | Not Equal |
| `gt` | Greater Than |
| `lt` | Less Than |
| `ge` | Greate or Equal |
| `le` | Less  or Equal |

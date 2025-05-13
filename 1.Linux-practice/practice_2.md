# Linux Exercise - 2
## Copying, renaming, and deleting files
```cmd
cd ~/linux-practice

# Recreate files to work with
mkdir play
cd play
touch file1.txt file2.txt file3.log file4.md

# Copy file1.txt to a new file called copy1.txt
cp file1.txt copy1.txt

# Rename file2.txt to renamed.txt
mv file2.txt renamed.txt

# Delete file3.log
rm file3.log

# Use `ls` to confirm everything
ls -l
```
You can create multiple files such as mkdir.
```cmd
touch file1.txt file2.txt
```
You can copy file using command "cp file_origin.txt file_copy.txt"
```
cp file1.txt copy1.txt
```
Command "mv" means move file. But you can use it as rename it
```cmd
# rename file
cp file1.txt file_1.txt
# move to other directory
cp file1.txt ../file1.txt

# Also you can do it both
cd file1.txt ../file_1.txt
```

## Wildcards and Batch Commands
```cmd
# Create files again for practice
touch a.txt b.txt c.log d.log e.md

# List only .txt files
ls *.txt

# Delete all .log files at once
rm *.log

# Copy all .txt files to a backup folder
mkdir backup
cp *.txt backup/

# Go check inside backup
ls backup
```
The asterisk (*) means “anything can be” in that position.
So ls *.txt lists all files with a .txt extension, regardless of the file name—such as abc.txt, sdfaf.txt, or 12314.txt.

## Piping Commands
```
# Create a sample file with multiple lines
echo -e "apple\nbanana\ncarrot\napple pie\nbanana bread" > fruits.txt

# Show only lines that include 'apple'
cat fruits.txt | grep apple

# Count how many lines contain 'banana'
grep banana fruits.txt | wc -l

# Display first 2 lines
head -n 2 fruits.txt

# Display last 2 lines
tail -n 2 fruits.txt
```
### echo -e
echo "-e" flag means it enables the interpretation of backslash escape such as "\n - change line", "\t - tap space", or etc.
so in the example above, fruits.txt is saved as
```cmd
aplle
banana
carrot
apple pie
banana bread
```
### Pipe (|)
Pipe (|) enable user use next command line with the previous command's result.
So "cat fruits.txt" pass the text such as "apple\nbanana\ncarrot\napple pie\nbanana bread" to grep apple
### grep
grep is finder. So it shows you apple from the result.
so the result is like this
```cmd
cat fruits.txt | grep apple
#result
apple
apple pie
```
And you can use grep first like this
```cmd
grep apple fruits.txt
```
then it shows same result

### wd
wd means word count and -l flag means line. "grep banana fruits.txt | wc -l" means the number of line from grep banana"

### Head 
head means the start from file and -n flag means number of lines. So show 2 lines from the start
### Tail
tail means the end from the file and -n flag means number of lines. So show 2 lines from the end
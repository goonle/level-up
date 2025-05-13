# Excerise 1 : Create Directory
```cmd
# Go to home directory
cd ~
# Create linux-practice Directory
mkdir linux-practice
# Move to linux-practice
cd linux-practice
# Create prihects abd notes directories
mkdir projects notes
```
There is a way to create child directory without cd 
```cmd
mkdir -p linux-practice linux-practice/notes linux-practice/projects
```

# Exercise 2 : Create and View Files
```
# Inside notes, create a new file
cd notes
touch day1.txt day2.txt

# Write a line into one file
echo "Linux is fun!" > day1.txt

# Append another line
echo "I will master the terminal." >> day1.txt

# View the contents
cat day1.txt
```
When you echo "string" > filenm.txt, It override file content as "string"
But If you echo "string2" >> filenm.txt, It write Text after the last content

And cat filenm.txt can show the content on command line

# Exercise 3 : Move and Rename Files
```cmd
# Rename a file
mv day2.txt journal.txt

# Move journal.txt to the projects folder
mv journal.txt ../projects/
```
# Exercies 4 : Challenges
## Create this forler and file structures using only command line
```
linux-practice/
├── scripts/
│   └── file1.txt
└── logs/
    └── file2.log
```
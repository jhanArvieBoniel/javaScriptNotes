console.log("----all the command in terminal-----")
console.log("cd  -change directory EX. ~/Desktop (linux) from directory to desktop directory")
console.log("cd.. -change directory move out from current to parent directory")
console.log("touch -will make a new empty file EX. touch example.txt or example\ space.js")
console.log("mkdir + (title) -making new folders EX. mkdir word-docs")
console.log("history -view history of recently typed command")
console.log("SAMPLE")
console.log(`
1. Change ot Desktop directory by typing cd~/Desktop
2. Create folder by typing mkdir 
3. Change to folder directory by typing cd myjsproject
4. Create file by typing example.js
5. Open file example.js by VScode 
`)
console.log("if file has space. type on command line: this is a sample ===cmd==>  cd this\ is\ a\ sample")
console.log("man -will display a manual")
console.log("man ls -will show a detailed command for ls")
console.log("ls -will show the current working directory")
console.log("ls -l -list the file out in list order")
console.log("ls -a -will list all file directories including hidden ones")
console.log("pwd -print working deirectory shows the full path of the current working directory")
console.log("cp -copies files/folder from one destination to another")
console.log("mv -move file/directory from one to another: mc sample.txt sampleFolder")
console.log("after typing ls -l, know the difference between link file, directory, and standard file")
console.log("link file is represented by l, directory starts with d, and - for standard file")
console.log("cat file1.txt -will return/show the content of a file")
console.log("wc file1.txt -w   -this will return the word count in a file")
console.log("pipes |    -a coding tool that allows the output of one command to be used as the inpiut for a different command")
console.log("ls | wc -w     -used pipe and does return the count of file")

console.log(`
0 is standar input represented by <
1 is standar output represented by >
2 is standard error represented by 2>
2>&1 standard error combined with standar output`)

console.log(`standar error and putting error into the file
ls -l /bin/usr > error.txt   -assuming that the /bin/usr directory doesnt exist then press enter this will return an error
ls -l /bin/usr 2> error.txt   -to send the error inside the txt file
less error.txt  -to show the message or error inside the file
ls -l /bin/usr > error_output.txt 2>&1      -to get error in the file
`)

console.log(`cat commands!
1. cat file1.txt | wc -w     -will return the word count in a file
2. cat file1.txt file2.txt | wc -w     -using pipe and mentioning 2 file on the command will return a sum of wordcount from two files.
3. cat > input.txt then press Enter input a txt the press enter and ctrl d  -adding txt inside a file. ctrl d will tell the cat to stop the command cat
4. cat input.txt or cat < input.txt   -to show output the txt inside the file
`)

console.log(`Standard output Linux with use redirection >
1. ls -l > output.txt    -txt file will be created by using > redirection flag.
`)

console.log(`grep in the command line to short somehthing in a file
1. grep Sam names.txt   -will return all the word inside the file that has Sam. (Sammuel, Samika) assuming the file has words inside it.
2. grep -i Sam name.txt   - -i  flag will ignore the case sensitivity and will return both sam with capital and small S. (Samuel, Rosamond)
3. grep -w Sam names.txt   - -w flag will return the specific input or asked. in this case Sam will only return (Sam).
4. ls /bin | grep zip    -using pipe and grep on a director will return a smaller result that matches the asked grep`)

console.log(`Instructions
Step 1: Open Terminal in your VS code editor.  
Step 2: Type the command mkdir lab and press Enter
Step 3: Change to the lab directory by typing cd lab and pressing Enter
Step 4: Type the command touch file1.txt and press Enter to create a file named file1.txt
Step 5: Type the command mkdir dir1 and press Enter
Step 6: Type the command mv file1.txt dir1/ and press Enter to move file1.txt to the dir1 directory
Step 7: Type the command touch file2.txt and press Enter to create a file named file2.txt
Step 8: Type the command mkdir -p dir2/dir3 and press Enter. We're using the -p flag to create the parent directories if they do not exist. In this case it will create the dir2 directory and then create the dir3 directory inside of dir2.
Step 9: Type the command mv file2.txt dir2/dir3/ and press Enter to move file2.txt to the dir3 directory
Step 10: Change to the dir2 directory by typing cd dir2
Step 11: Type the command touch file3.txt and press Enter to create a file named file3.txt
Step 12: Type the command mv file3.txt ../ and press Enter to move file3.txt to the lab directory
Step 13: Type the command cd .. and press Enter to navigate back to the lab directory
Step 14: Type the command cd dir1 and press Enter.
Step 15: Type the command ls -l and press Enter. Note how many files and directories are in the dir1 directory.
Step 16: Type the command cd ../dir2 and press Enter.
Step 17: Type the command ls -l and press Enter. Note how many files and directories are in the dir2 directory.
Step 18: Type the command cd dir3 and press Enter.
Step 19: Type the command ls -l and press Enter. Note how many files and directories are in the dir3 directory.`)

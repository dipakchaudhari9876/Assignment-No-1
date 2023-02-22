const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent,(err)=>{
		console.log(err)
	})
	// write code here
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	fs.readFile(fileName,'utf-8',(err,data)=>{
		console.log(data)
	})
	

	// write code here
	// dont chnage function name
	//write
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName,fileContent,(err)=>{
		console.log(err)
	})

	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName,(err)=>{
		console.log(err)
	})
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
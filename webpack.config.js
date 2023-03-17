const defaults = require('@wordpress/scripts/config/webpack.config'),
	{ join } = require('path'),
	{ writeFile } = require('fs'),
	{ sync } = require('glob'),

	rename = () => {
		const blockJSONFiles = sync(
				join(process.cwd(), 'build', '**', 'block.json')
			)

		if (blockJSONFiles) {
			blockJSONFiles.forEach(filePath => {
				const blockJSON = require(filePath)

				if (blockJSON?.editorScript) {
					blockJSON.editorScript = blockJSON.editorScript.replace('.tsx', '.js')
				}

				if (blockJSON?.script) {
					blockJSON.script = blockJSON.script.replace('.tsx', '.js')
				}

				if (blockJSON?.viewScript) {
					blockJSON.viewScript = blockJSON.viewScript.replace('.tsx', '.js');
				}

				if (blockJSON?.editorStyle) {
					blockJSON.editorStyle = blockJSON.editorStyle.replace('.scss', '.css');
				}

				if (blockJSON?.style) {
					blockJSON.style = blockJSON.style.replace('.scss', '.css');
				}

				writeFile(filePath, JSON.stringify(blockJSON, null, 2), function writeJSON(error) {
					if (error) return console.log(error)
				})
			})
		}
	}

module.exports = {
	...defaults,

	module: {
		...defaults.module,
	},
	plugins: [
		...defaults.plugins,
		{
			apply: ({ hooks }) =>{
				hooks.afterEmit.tap('rename', rename)
			}
		}
	]
}

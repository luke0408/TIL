const fs = require('fs');
const path = require('path');

// 템플릿 파일 경로
const templatePath = path.join(__dirname, './TIL-template.md');

// 인자로 파일 이름과 디렉토리 경로를 받습니다.
const [, , dirPath = '.', fileName] = process.argv;

if (!fileName) {
  console.error('파일 이름을 입력하세요.');
  process.exit(1);
}

// 목적지 파일 경로
const destinationDir = dirPath;
const destinationPath = path.join(destinationDir, `${fileName}.md`);

// 디렉토리가 존재하지 않으면 생성합니다.
fs.mkdir(destinationDir, { recursive: true }, (err) => {
  if (err) {
    console.error('디렉토리 생성 중 오류가 발생했습니다:', err);
    process.exit(1);
  }

  // 템플릿 파일을 읽고 복사합니다.
  fs.copyFile(templatePath, destinationPath, (err) => {
    if (err) {
      console.error('파일 생성 중 오류가 발생했습니다:', err);
      process.exit(1);
    }
    console.log(`파일이 생성되었습니다: ${destinationPath}`);
  });
});
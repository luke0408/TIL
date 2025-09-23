# Today I Learned

- 매일은 아니더라도 꾸준히 공부한 기록을 남기기 위해 시작했습니다.

| Directory         | Content                              | Count                        |
| ----------------- | :----------------------------------- | ---------------------------- |
| AI_ML             | 인공지능과 머신러닝과 관련된 내용       | __AI_ML_DIRECTORY_COUNT__    |
| Backend           | 백엔드 프레임워크와 관련된 내용         | __Backend_DIRECTORY_COUNT__  |
| Cloud             | 클라우드 컴퓨팅과 관련된 내용           | __Cloud_DIRECTORY_COUNT__    |
| DevGeneral        | 디자인 패턴, 방법론 등의 내용          | __DevGeneral_DIRECTORY_COUNT__|
| DevOps            | DevOps와 관련된 내용                  | __DevOps_DIRECTORY_COUNT__   |
| Databases         | 데이터베이스와 관련된 내용             | __Databases_DIRECTORY_COUNT__|
| Frontend          | 프론트 프레임워크와 관련된 내용        | __Frontend_DIRECTORY_COUNT__ |
| Languages         | 다양한 프로그래밍 언어와 관련된 내용    | __Languages_DIRECTORY_COUNT__|
| Networking        | 네트워킹과 관련된 내용                 | __Networking_DIRECTORY_COUNT__|
| OperatingSystems  | 운영 체제와 관련된 내용                | __OperatingSystems_DIRECTORY_COUNT__|
| Security          | 보안과 관련된 내용                    | __Security_DIRECTORY_COUNT__|

해당 TIL은 아래의 자료들의 영향을 받았습니다.
- [jbrnchaud/til](https://github.com/jbranchaud/til)
- [Integerous/goQuality-dev-contents](https://github.com/Integerous/goQuality-dev-contents)
- [cheese10yun/TIL](https://github.com/cheese10yun/TIL)
- [namjunemy/TIL](https://github.com/namjunemy/TIL)
- [rlaisqls/TIL](https://github.com/rlaisqls/TIL)

<br>

## 작성 규칙
- 폴더와 파일명은 영문으로 작성한다.
  - 책의 이름의 경우 예외로 한글로 작성한다.
- 고민이나 질문이 생기면 issue를 통해 과정을 기록으로 남긴다.
  - issue를 열었을 경우 관련 글에 표기한다.
  - issue는 가능한 닫지 않으며 tag를 통해 issue가 끝났음을 표기한다.
- 더 많은 공유를 원하는 기록은 블로그를 통해 다룬다.
  - 블로그에 포스팅한 경우 주소를 명시한다.
  - 스터디 진행 내용을 정리한 경우 스터디가 끝난 후 블로그에 포스팅한다.
  - 블로그를 통해 다루는 내용의 기준
    1. 단순히 정리를 넘어 내 생각을 다루고 싶을때
    2. 한 번 정리 하는게 아니라 두고두고 봐야하는 주제일때
    3. 정리한 것만으로 이해했다고 확신이 들지 않을 때
- 잔디를 채우는 것에 집작하지 않는다.
- reference는 다음의 분류를 따른다.
  - issue: 해당 repo의 관련 issue를 의미한다.
  - auther note: 해당 repo의 관련 note를 의미한다.
  - link: 외부에서 참고한 reference를 의미한다.

<br>

## File Tree

📦[**TIL**](./docs)</br>
┣━&nbsp;📂[**Baken**](.Baken)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**NetJS**](.BakenNetJS)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Requet_Lifeyle**](.BakenNetJSRequet_Lifeyle.m)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**npm**](.Bakennpm)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📂[**pakage_jn**](.Bakennpmpakage_jn)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**epenenie_flie**](.Bakennpmpakage_jnepenenie_flie.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**env_publih_fiel**](.Bakennpmpakage_jnenv_publih_fiel.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**meta_fiel**](.Bakennpmpakage_jnmeta_fiel.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**runtime_i_fiel**](.Bakennpmpakage_jnruntime_i_fiel.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Semanti_verin**](.BakennpmSemanti_verin.m)<br>
┣━&nbsp;📂[**Clu**](.Clu)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**AWS**](.CluAWS)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**EC2**](.CluAWSEC2.m)<br>
┣━&nbsp;📂[**DevGeneral**](.DevGeneral)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Agile**](.DevGeneralAgile)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**SftwareCraftmanhipManifet**](.DevGeneralAgileSftwareCraftmanhipManifet.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Algrithm**](.DevGeneralAlgrithm)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📂[**Srt**](.DevGeneralAlgrithmSrt)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Merge_Srt**](.DevGeneralAlgrithmSrtMerge_Srt.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**DeignPattern**](.DevGeneralDeignPattern)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Stati_Fatry_Meth**](.DevGeneralDeignPatternStati_Fatry_Meth.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**IEEE**](.DevGeneralIEEE)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**IEEE_754_Flating_Pint**](.DevGeneralIEEEIEEE_754_Flating_Pint.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**Priniple**](.DevGeneralPriniple)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Tw_Hat**](.DevGeneralPrinipleTw_Hat.m)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Refatring**](.DevGeneralRefatring)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Definitin_f_Refatring**](.DevGeneralRefatringDefinitin_f_Refatring.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Rean_fr_Refatring**](.DevGeneralRefatringRean_fr_Refatring.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**When_t_Refatring**](.DevGeneralRefatringWhen_t_Refatring.m)<br>
┣━&nbsp;📂[**DevOp**](.DevOp)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Pulumi**](.DevOpPulumi)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Prjet**](.DevOpPulumiPrjet.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Pulumi**](.DevOpPulumiPulumi.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Stak**](.DevOpPulumiStak.m)<br>
┣━&nbsp;📂[**Language**](.Language)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📂[**JavaSript**](.LanguageJavaSript)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**DataStruture**](.LanguageJavaSriptDataStruture)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Jn**](.LanguageJavaSriptDataStrutureJn.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Map**](.LanguageJavaSriptDataStrutureMap.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**DataType**](.LanguageJavaSriptDataType)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**BigInt**](.LanguageJavaSriptDataTypeBigInt.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Blean**](.LanguageJavaSriptDataTypeBlean.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Null**](.LanguageJavaSriptDataTypeNull.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number**](.LanguageJavaSriptDataTypeNumber.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Number_Type_Iue**](.LanguageJavaSriptDataTypeNumber_Type_Iue.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**String**](.LanguageJavaSriptDataTypeString.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Symbl**](.LanguageJavaSriptDataTypeSymbl.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Typef**](.LanguageJavaSriptDataTypeTypef.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Unefine**](.LanguageJavaSriptDataTypeUnefine.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Engine**](.LanguageJavaSriptEngine)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Exeutin_Cntext**](.LanguageJavaSriptEngineExeutin_Cntext.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Intrutin_t_JavaSript_Engine**](.LanguageJavaSriptEngineIntrutin_t_JavaSript_Engine.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**JavaSript_Cmpilatin_Pre**](.LanguageJavaSriptEngineJavaSript_Cmpilatin_Pre.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Parer_An_AST**](.LanguageJavaSriptEngineParer_An_AST.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Funtin**](.LanguageJavaSriptFuntin)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Arrw_Funtin**](.LanguageJavaSriptFuntinArrw_Funtin.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Funtin**](.LanguageJavaSriptFuntinFuntin.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Intrutin**](.LanguageJavaSriptIntrutin)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Hitry_f_JavaSript**](.LanguageJavaSriptIntrutinHitry_f_JavaSript.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**What_i_JavaSript**](.LanguageJavaSriptIntrutinWhat_i_JavaSript.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**JSD**](.LanguageJavaSriptJSD)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**JSD**](.LanguageJavaSriptJSDJSD.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**Objet**](.LanguageJavaSriptObjet)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Built-in_Objet**](.LanguageJavaSriptObjetBuilt-in_Objet.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Objet**](.LanguageJavaSriptObjetObjet.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**ObjetPrttype**](.LanguageJavaSriptObjetObjetPrttype.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Prttypal_Inheritane**](.LanguageJavaSriptObjetPrttypal_Inheritane.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📂[**TypeCating**](.LanguageJavaSriptTypeCating)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┣━&nbsp;📄[**Expliit_Type_Cating**](.LanguageJavaSriptTypeCatingExpliit_Type_Cating.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📄[**Impliit_Type_Cating**](.LanguageJavaSriptTypeCatingImpliit_Type_Cating.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;┗━&nbsp;📂[**Variable**](.LanguageJavaSriptVariable)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Cnt**](.LanguageJavaSriptVariableCnt.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Hiting**](.LanguageJavaSriptVariableHiting.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Let**](.LanguageJavaSriptVariableLet.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Spe**](.LanguageJavaSriptVariableSpe.m)<br>
┃  &nbsp;&nbsp;┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Var**](.LanguageJavaSriptVariableVar.m)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**TypeSript**](.LanguageTypeSript)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Cnt_Aertin**](.LanguageTypeSriptCnt_Aertin.m)<br>
┣━&nbsp;📂[**Netwrking**](.Netwrking)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**HTTP**](.NetwrkingHTTP)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**Chunke_Tranfer-Ening**](.NetwrkingHTTPChunke_Tranfer-Ening.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_0.9-t-1.1**](.NetwrkingHTTPHTTP_0.9-t-1.1.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_Generi_Meage**](.NetwrkingHTTPHTTP_Generi_Meage.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_ht-heaer**](.NetwrkingHTTPHTTP_ht-heaer.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┣━&nbsp;📄[**HTTP_Keep-Alive**](.NetwrkingHTTPHTTP_Keep-Alive.m)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**Meage_Start_Line**](.NetwrkingHTTPMeage_Start_Line.m)<br>
┣━&nbsp;📂[**OperatingSytem**](.OperatingSytem)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📂[**Linux**](.OperatingSytemLinux)<br>
┃  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┗━&nbsp;📄[**tree**](.OperatingSytemLinuxtree.m)<br>
┣━&nbsp;📂[**tutrial-bai**](.tutrial-bai)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**ngratulatin**](.tutrial-baingratulatin.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**reate-a-blg-pt**](.tutrial-baireate-a-blg-pt.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**reate-a-ument**](.tutrial-baireate-a-ument.m)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**reate-a-page**](.tutrial-baireate-a-page.m)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📄[**eply-yur-ite**](.tutrial-baieply-yur-ite.m)<br>
┣━&nbsp;📂[**tutrial-extra**](.tutrial-extra)<br>
┃  &nbsp;&nbsp;┣━&nbsp;📄[**manage--verin**](.tutrial-extramanage--verin.m)<br>
┃  &nbsp;&nbsp;┗━&nbsp;📄[**tranlate-yur-ite**](.tutrial-extratranlate-yur-ite.m)<br>
┗━&nbsp;📄[**intr**](.intr.m)<br>

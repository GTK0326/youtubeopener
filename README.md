# youtubeopener
Alexaに指示を出すことで、パソコンでYoutubeをフルスクリーン再生させるGoogle拡張機能です。

#事前準備
1.nircmdをインストールする。
2."manifest.json","content.js","background.js"の3つを同じフォルダに入れてgoogle拡張機能に追加する。
3."YoutubeOpener.bat"を任意のフォルダに格納する。
4.PushBulletを使ってPush2Runに通知を送り"YoutubeOpener.bat"の起動設定を行う。
5.IFTTTでAlexaからPushBulletに通知を送る設定を行う。

6.Chromeブラウザで再生途中のYoutube動画を開いておく（最小化していてもよい）

#使用方法
Alexaに指定したトリガーでアクションを行う。

#内部処理の説明
1.Alexaのアクションを実行する

2.IFTTTを通じてPushBulletへ、PushBulletからPush2Runへ通知が送られる。

3.Push2RunからYoutubeOpener.batが起動される。

4.YoutubeOpener.batで海外のGoogleサイト"https://www.google.tk/?gl=tk" が開かれる。(このサイトは発火のために開いただけであとの処理で消す。)
-----Google Extension処理開始-----
5.このサイトの起動を確認したGoogle extension内のcontent.jsのscriptが実行される。

6.content.jsにおいてbackground.jsに通知(発火)が行く。

7.content.jsからの通知を受け取ったbackground.jsにおいてscriptが実行される。

8.background.jsにおいて、Chromeで開かれているタブの中から"https://www.youtube.com/watch?v=" の文字列が存在するものを選択する。

9.そのURLの44文字目以降を削除する。(URLに再生開始時間が設定されている場合、以前の再生時間から再生されない問題を避けるため)

10.8において選択したタブを削除する。

11.9で選択したURLのタブを生成する。(任意のタブをアクティブウィンドウにするには削除→生成が簡単である。)

12.background.jsにおいて、Chromeで開かれているタブの中から"https://www.google.tk/?gl=tk" の文字列が存在するものを選択する。(4で生成したもの)

13.12において選択したタブを削除する。
-----Google Extension処理終了-----
14.YoutubeOpener.batのnircmdコマンドで"F"キーが押下されフルスクリーン化する。

15.実行終了

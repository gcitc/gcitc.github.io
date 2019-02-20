#sudo badh 최고 관리자 명령에서 실행
apt-get update
apt-get upgrade
apt-get disk-upgrade
sudo apt-get install unzip 
cd /etc/
rm sysctl.conf
wget https://gcitc.github.io/sysctl.conf
#커널 설정
apt-get install portsentry 
cd /etc/
rm -r portsentry 
mkdir portsentry 
cd portsentry 
wget https://gcitc.github.io/p.zip
unzip p.zip
rm p.zip
#port sentry
# 선택사항
cd /etc/ssh
rm sshd_config
wget https://gcitc.github.io/sshd_config
arp -va
# https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html
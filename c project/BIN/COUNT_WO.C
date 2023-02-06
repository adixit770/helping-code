void main()
{
char str[80];
int i,count=0;
clrscr();

printf("enter the string\n");
gets(str);

for(i=0;i<strlen(str);i++){
if(str[i]==' ')
{count++;
}
}
printf("%d",count+1);
getch();
}

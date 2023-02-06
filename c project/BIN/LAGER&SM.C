void main()
{
char str[80];
int a,j,i,count=0;
clrscr();

printf("enter the string\n");
gets(str);

for(i=0;i<strlen(str);i++){
//if(str[i]==' ')
for(j=i;j<strlen(str);j++)
{ if(str[i]==' ')
count++;
a=count;
}
}
printf("%s",str[i]);
getch();
}
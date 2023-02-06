void main()
{
char str[100];
int i;
clrscr();
printf("enter the string\n");
gets(str);
for(i=0;i<strlen(str);i++)
{
printf("%c  ",str[i]);
}
getch();
}

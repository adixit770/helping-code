void main()
{
char s[100];
int i,j;
clrscr();
printf("enter the string");
gets(s);
for(i=0;i<=strlen(s);i++)
  {
     for (j=0;j<=i-1;j++)
	 printf("%c",s[j]);

	 printf("\n");
	 }
	 for(i=strlen(s);i>=0;i--)
  {
     for (j=0;j<=i-1;j++)
	 printf("%c",s[j]);

	 printf("\n");
	 }

	 getch();
	 }
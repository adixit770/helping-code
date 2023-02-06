int fact(n)
{
if(n==0||n==1)
return 1;
else
return n*fact(n-1);
}
void main()
{
int n;
clrscr();
printf("enter the number");
scanf("%d",&n);
printf("%d\n",fact(n));
getch();
}
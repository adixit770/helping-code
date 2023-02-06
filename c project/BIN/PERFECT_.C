int per(n)
{
if(n==0)
return 0;
else
return n%10+per(n/10);
}
void main()
{
int n;
printf("enter the number");
scanf("%d",&n);
printf("%d,per(n)");
getch();
}
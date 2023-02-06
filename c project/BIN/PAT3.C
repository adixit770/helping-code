 void main()
{
  int i,t,j,n;
  clrscr();
  printf("enter the number");
  scanf("%d",&n);
  for(i=n;i>=1;i--)
    { t=1;
      for(j=1;j<=i*2-1;j++)
	{
	  printf("%d",t);

	  j<i?t++:t--;
	   }

	  printf("\n");
    }
  getch();
}
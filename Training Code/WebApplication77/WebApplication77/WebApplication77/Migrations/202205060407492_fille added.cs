namespace WebApplication77.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class filleadded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Customers", "file", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Customers", "file");
        }
    }
}

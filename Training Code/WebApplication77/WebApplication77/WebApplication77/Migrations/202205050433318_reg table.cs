namespace WebApplication77.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class regtable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Regs",
                c => new
                    {
                        Reg_Id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        password = c.String(),
                    })
                .PrimaryKey(t => t.Reg_Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Regs");
        }
    }
}

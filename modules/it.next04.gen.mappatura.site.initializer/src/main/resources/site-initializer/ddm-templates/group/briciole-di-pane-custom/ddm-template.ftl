<#--
Widget templates can be used to modify the look of a
specific application.
 
Please use the right panel to quickly add commonly used variables.
Autocomplete is also available and can be invoked by typing "${".
 
Briciole di pane custom
 
-->
<#if entries?has_content>
<@liferay_util["html-top"]>
<style>
  .mynav{
		padding:20px 0;
		background-color:#f0f9fd;
	}
 
	.mynav ol{
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-weight: 600;
		color: #0e1d34;
		margin-left:20px;
	}
	.mynav ol li+li {
		padding-left: 10px;
	}
	.mynav ol li+li::before{
		display: inline-block;
		padding-right: 10px;
		color: #49b5e7;
		content: "/";
	}
	.mynav ol a {
		color: #49b5e7;
		transition: 0.3s;
	}
	.mycol{ background-color:#f0f9fd; }
		.entry{
		  display:inline;
		}
</style>
</@>
 
	<div class="row">
<div class="col-lg-12 mycol" >
<nav class="mynav" >
<div class="container-fluid container-fluid-max-xl-header">
<ol>
 
		   <#assign cssClass = "" />
 
		   <#list entries as entry>
<#if entry?is_last>
<#assign cssClass = "active" />
</#if>
 
			   <li class="${cssClass}" <#if entry?is_last>aria-current="page"</#if>>
<#if entry?has_next>
<a
 
					<#if entry.isBrowsable()>
						href="${entry.getURL()!""}"
</#if>
 
					>
</#if>
 
				<div class="entry">
					${htmlUtil.escape(entry.getTitle())}
</div>
 
				<#if entry?has_next>
</a>
</#if>
</li>
</#list>	
</div>
</ol>
</nav>
</div>
</div>
</#if>
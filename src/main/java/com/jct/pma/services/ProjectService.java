package com.jct.pma.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jct.pma.dao.ProjectRepository;
import com.jct.pma.dto.ChartData;
import com.jct.pma.dto.TimeChartData;
import com.jct.pma.entities.Project;

@Service
public class ProjectService {

	@Autowired
	ProjectRepository proRepo;
	
	public Project save(Project project) {
		return proRepo.save(project);
	}
	
	public List<Project> getAll(){
		return (List<Project>) proRepo.findAll();
	}
	
	public List<ChartData> getProjectStatus(){
		return proRepo.getProjectStatus();
	}

	public  Project findByProjectId(long theId) {
		return proRepo.findByProjectId(theId);
	}

	public void delete(Project thePro) {
		proRepo.delete(thePro);
	}
	
	public List<TimeChartData> getTimeData(){
		return proRepo.getTimeData();
	}

	
	
}
